import styles from "./Iframe.module.css"

export const youTubeBaseUrl = "`https://www.youtube.com/embed/";
export const autoplayOn = `?autoplay=1`
export const autoplayOf = `?autoplay=0`

function Iframe({children, src, youtubeId}) {

    return (

        <div className={styles.iframe}>
            <iframe
                src={src}
                frameBorder="0"
                allow="autoplay"
                allowFullScreen={true}
                title={"video"}
                name={youtubeId}
            />
            {children}
        </div>

    )
}

export default Iframe;


