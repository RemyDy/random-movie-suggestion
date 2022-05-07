import styled from "./Tile.module.css"

export function Tile({children, title, id}) {

    return (
        <article
            className={styled.tile}
            id={id}
        >
            <h2 className={styled.header}>
                {title}
            </h2>

            <div className={styled.main}>
                {children}
            </div>

        </article>
    )
}

export function TileWhiteBG({children}){
    return(
        <article>
            {children}
        </article>
    )
}





