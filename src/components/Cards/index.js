import React from "react";

export function CardContainer({children}) {
    return(
        <div className ="card bg-primary">
            {children}
        </div>
    )
};

export function CardHeader({children}){
    return (
        <div className="card-header text-center">
            {children}
        </div>
    )
};

export function CardBody({children}){
    return (
        <div className="card-body text-center">
            {children}
        </div>
    )
};
