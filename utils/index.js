export const findComponentUpward = (context, componentName) => {
	let parent = context.$parent
	let name = parent.$options.name

	while (parent && (!name || name !== componentName)) {
		parent = parent.$parent
		if (parent) {
			name = parent.$options.name
		}
	}
	return parent
}

export const findComponentsDownward  = (context, componentName) => {
	return context.$children.reduce((components, child) => {
		if (child.$options.name === componentName) {
			components.push(child)
		}
		return components.concat(findComponentsDownward(child, componentName))
	}, [])
}
