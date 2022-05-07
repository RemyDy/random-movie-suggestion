import styled from "./TileWithContent.module.css"
import {Tile} from "../Tile";

export function TileWithContent({children, header, main, footer}) {

    return (
        <article className={styled["tile-content"]}>
                <section
                    className={styled.header}
                    title={header}
                >
                    {children}
                </section>

                <section
                    className={styled.main}
                    title={main}
                >
                    {children}
                </section>

                <section
                    className={styled.footer}
                    title={footer}
                >
                    {children}
                </section>
        </article>
    )
}