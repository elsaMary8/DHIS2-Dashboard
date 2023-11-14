import {ReactNode} from "react";

const Container = (children: ReactNode) => {
    return <div style={{
        height: 600,
        backgroundColor: 'black'
    }}>
        {children}
    </div>
}

export default Container;
