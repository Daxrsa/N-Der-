using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NDereAPI.Interfaces;
using NDereAPI.Models;

namespace NDereAPI.CodeFirstClasses
{
    public class PhotoAccessor : IPhotoAccessor
    {
           public Task<PhotoUploadResult> AddPhoto(IFormFile file){
                throw new System.NotImplementedException();
             }
             public  Task<string> DeletePhoto(string publicId){
                 throw new System.NotImplementedException();
             }
             
    }
}