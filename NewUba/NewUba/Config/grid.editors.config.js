[
	{
	    "name": "Rich text editor",
	    "alias": "rte",
	    "view": "rte",
	    "icon": "icon-article"
	},
	{
	    "name": "Image",
	    "alias": "media",
	    "view": "media",
	    "icon": "icon-picture"
	},
	{
	    "name": "Macro",
	    "alias": "macro",
	    "view": "macro",
	    "icon": "icon-settings-alt"
	},
	{
	    "name": "Embed",
	    "alias": "embed",
	    "view": "embed",
	    "icon": "icon-movie-alt"
	},
    {
        "name": "Headline",
        "alias": "headline",
        "view": "textstring",
        "icon": "icon-coin",
        "config": {
            "style": "font-size: 36px; line-height: 45px; font-weight: bold",
            "markup": "<h1>#value#</h1>"
        }
    },
	{
	    "name": "Quote",
	    "alias": "quote",
	    "view": "textstring",
	    "icon": "icon-quote",
	    "config": {
	        "style": "border-left: 3px solid #ccc; padding: 10px; color: #ccc; font-family: serif; font-style: italic; font-size: 18px",
	        "markup": "<blockquote>#value#</blockquote>"
	    }
	},
       {
           "name": "Image Slider Container",
           "alias": "slider",
           "view": "/app_plugins/ImageSlider/ImageSlider.html",
           "icon": "icon-movie-alt"
       },
       {
           "name": "Team Member Container",
           "alias": "teammembercontainer",
           "view": "/app_plugins/TeamMemberGridEditor/teammember.html",
           "icon": "icon-movie-alt"
       },
       {
           "name": "How We Works Container",
           "alias": "howWeWorksContainer",
           "view": "/app_plugins/howWeWorksGridEditor/howWeWorks.html",
           "icon": "icon-movie-alt"
       }
]