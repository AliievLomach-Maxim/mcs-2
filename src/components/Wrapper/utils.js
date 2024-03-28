import clsx from "clsx"

export const generateClasses = (value,classes)=>{
    return clsx(classes.container, {
			[classes.online]: value,
			[classes.offline]: !value,
		})
}