using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NDereAPI.Photos
{
    public interface IPhotoAccessor
    {
        Task<PhotoUploadResult> AddPhoto(IFormFile file);
        Task<String> DeletePhoto(string publicId);
    }
}