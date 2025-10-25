import type {ReactNode} from "react";

export default function Window({children}: {children: ReactNode}) {
    return (
        <div className="w-3xl rounded-xl border overflow-hidden">
            {children}
        </div>
    );
};


Window.Content = function Content({children, className}: {children: ReactNode, className?: string}) {
    return (
        <div className={`bg-gray-600 ${className}`}>
            {children}
        </div>
    );
};

Window.Title = function Title({children}: {children: ReactNode}) {
    return (<div>{children}</div>)
}

