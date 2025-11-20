export type VariantRecord = Record<string, Record<string, string>> | Record<string, string>;


export function cn(base = '', variants: VariantRecord = {}, defaultVariants: Record<string, string> = {}) {
    return (props: Record<string, any> = {}) => {
        const classes: string[] = [];
        if (base) classes.push(base);


        // handle simple variant shape and multi-variant shape
        for (const key of Object.keys(variants)) {
            const v = props[key] ?? defaultVariants[key];
            if (!v) continue;
            const mapping = variants[key] as any;
            const valueClass = mapping[v] ?? mapping[v as keyof typeof mapping];
            if (valueClass) classes.push(valueClass);
        }


        // extra className
        if (props.className) classes.push(props.className);
        return classes.join(' ').trim();
    };
}