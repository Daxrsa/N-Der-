using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Controllers;
using Application.Photos;
using Microsoft.AspNetCore.Mvc;
using NDereAPI.Photos;

namespace NDereAPI.Controllers
{
    public class PhotosController : BaseController
    {
        [HttpPost]
        public async Task<ActionResult<Photo>> Add([FromForm] Add.Command command)
        {
            return await Mediator.Send(command);
        }
    }
}