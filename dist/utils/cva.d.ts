export type VariantRecord = Record<string, Record<string, string>> | Record<string, string>;
export declare function cn(base?: string, variants?: VariantRecord, defaultVariants?: Record<string, string>): (props?: Record<string, any>) => string;
