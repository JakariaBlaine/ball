class LoadingScreen
{
	static init()
	{
		this.progress = 0
		this.bar = new ldBar('#loading_progress', {})
		this.resources = [
			{
				name: "texture_lamppost",
				loaded: false
			},
			{
				name: "texture_footpath",
				loaded: false
			},
			{
				name: "texture_wall",
				loaded: false
			},
			{
				name: "texture_ground",
				loaded: false
			}
		]
	}

	static update()
	{
		let loaded = 0
		for (var i = 0; i < this.resources.length; i++)
		{
			let resource = this.resources[i]
			if(resource.loaded)
			{
				loaded++
			}
		}

		this.setProgress(loaded / this.resources.length * 100)
	}

	static setProgress(progress)
	{
		if(progress == 'Infinity') progress = 0
		this.progress = progress

		this.bar.set(progress)

		if(progress == 100)
		{
			setTimeout(() => {
				document.getElementById('loading_screen_wrapper').style.display = 'none'
			}, 1000)
		}
	}

	static loadingCompleted(key_name)
	{
		let key = null;

		this.resources.forEach((resource, k) => {
			console.log('resource', resource)
			if(resource.name == key_name)
			{
				key = k
			}
		})
		this.resources[key].loaded = true
	}
}

LoadingScreen.progress = null
LoadingScreen.bar = null
LoadingScreen.resources = []

export default LoadingScreen