import styled from "./Tile.module.css"

function Tile({children, title,}) {

    return (
        <article className={styled.tile}>
            <h2 className={styled.header}>
                {title}
            </h2>
            <section className={styled.section}>
                {children}
            </section>
        </article>
    )
}

export default Tile;