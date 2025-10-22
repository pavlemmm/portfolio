import type {ReactNode} from "react";

type Props = {
    children: ReactNode;
}

export default function Window({children}: Props) {
    return (
        <div className="w-5 bg-black">
            {children}
        </div>
    );
};