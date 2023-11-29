import style from "../css/modules/TheMain.module.css"

export default function Main(){
    return (
        <main>
            <div className={style.img}>
                <h2 className={style.imgTitle}>600 x 400</h2>
            </div>
            <div className={style.box}>
                <h3 className={style.boxTitle}>Titolo del Post</h3>
                <p className={style.boxText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates at perspiciatis architecto ducimus vero! Facilis illum quae corporis deleniti ipsa, placeat, necessitatibus illo nihil, molestias quos nulla adipisci rerum excepturi.</p>
                <button className={style.button}>LEGGI DI PIU'</button>
            </div>
        </main>
    )
}