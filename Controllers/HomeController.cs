using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TerrainProjects_LandOwnerClone.Models;

namespace TerrainProjects_LandOwnerClone.Controllers
{
	namespace TerrainProjects_LandOwnerClone.Controllers
	{
		public class HomeController : Controller
		{
			public IActionResult Index()
			{
				return View();
			}
			public IActionResult Intravilan()
			{
				return View();
			}

			public IActionResult Extravilan()
			{
				return View();
			}

			public IActionResult Cart()
			{
				return View();
			}
		}
	}

}
