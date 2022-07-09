using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using NDereAPI.ProfileSpace;
using MediatR;
using AutoMapper.QueryableExtensions;

namespace NDereAPI.ProfileSpace
{
    public class Details
    {
        public class Query : IRequest<Profile>
        {
            public string Username { get; set; }
        }

        public class Handler : IRequestHandler<Query, Profile>
        {
            private readonly NDereContext _context;
            private readonly IMapper _mapper;

            public Handler(NDereContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Profile> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _context.Users.ProjectTo<Profile>(_mapper.ConfigurationProvider)
                .SingleOrDefaultAsync(x => x.Username == request.Username);

                return new Profile
                {
                    Username = user.Username,
                    Image = user.Photos.FirstOrDefault(x => x.IsMain)?.Url,
                    Photos = user.Photos
                };
            }
        }
    }
}