import { useEffect } from "react";
import "./../../css/articles.css";
import Aos from "aos";

const ArticlesPage = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <>
            <div className="container">
                <div className="banner">
                    <img
                        className="banner__image--img"
                        src="https://res.cloudinary.com/dhfryzrce/image/upload/v1709525523/image_2-1_lbgjck.png"
                        alt=""
                        data-aos="zoom-out"
                    />
                </div>
                <div className="contents">
                    <div data-aos='fade-left' className="content__title">
                        <h1 className="fw-bold">Finibus Bonorum et Malorum</h1>
                        <span>Written by John doe</span> Monday May 20
                    </div>
                    <hr />
                    <div className="content__items">
                        <p className="content__items--p">
                            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in
                            45 BC <br />
                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                            illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                            quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                            eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
                            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                            voluptas nulla pariatur?"
                        </p>
                        <p className="content__items--p">
                            1914 translation by H. Rackham <br />
                            "But I must explain to you how all this mistaken idea of denouncing
                            pleasure and praising pain was born and I will give you a complete
                            account of the system, and expound the actual teachings of the great
                            explorer of the truth, the master-builder of human happiness. No one
                            rejects, dislikes, or avoids pleasure itself, because it is pleasure,
                            but because those who do not know how to pursue pleasure rationally
                            encounter consequences that are extremely painful. Nor again is there
                            anyone who loves or pursues or desires to obtain pain of itself, because
                            it is pain, but because occasionally circumstances occur in which toil
                            and pain can procure him some great pleasure. To take a trivial example,
                            which of us ever undertakes laborious physical exercise, except to
                            obtain some advantage from it? But who has any right to find fault with
                            a man who chooses to enjoy a pleasure that has no annoying consequences,
                            or one who avoids a pain that produces no resultant pleasure?"
                        </p>
                        <h3 data-aos='fade-left' className="content__items--h3 fw-bold" style={{ fontSize: 20 }}>
                            <i>Section 1.10.33 of "de Finibus Bonorum et Malorum"</i>
                        </h3>
                        <p className="content__items--p">
                            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                            et quas molestias excepturi sint occaecati cupiditate non provident,
                            similique sunt in culpa qui officia deserunt mollitia animi, id est
                            laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                            distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                            cumque nihil impedit quo minus id quod maxime placeat facere possimus,
                            omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
                            quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
                            ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
                            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                            voluptatibus maiores alias consequatur aut perferendis doloribus
                            asperiores repellat."
                        </p>
                        <h3 data-aos='fade-left' className="content__items--h3 fw-bold">Section</h3>
                        <p className="content__items--p">
                            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                            et quas molestias excepturi sint occaecati cupiditate non provident,
                            similique sunt in culpa qui officia deserunt mollitia animi, id est
                            laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                            distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                            cumque nihil impedit quo minus id quod maxime placeat facere possimus,
                            omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
                            quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
                            ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
                            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                            voluptatibus maiores alias consequatur aut perferendis doloribus
                            asperiores repellat."
                        </p>
                        <h3 data-aos='fade-left' className="content__items--h3 fw-bold">Section 1.10.33</h3>
                        <p className="content__items--p">
                            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                            et quas molestias excepturi sint occaecati cupiditate non provident,
                            similique sunt in culpa qui officia deserunt mollitia animi, id est
                            laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                            distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                            cumque nihil impedit quo minus id quod maxime placeat facere possimus,
                            omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
                            quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
                            ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
                            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                            voluptatibus maiores alias consequatur aut perferendis doloribus
                            asperiores repellat." <br />
                            Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in
                            45 BC <br />
                            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                            et quas molestias excepturi sint occaecati cupiditate non provident,
                            similique sunt in culpa qui officia deserunt mollitia animi, id est
                            laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                            distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                            cumque nihil impedit quo minus id quod maxime placeat facere possimus,
                            omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
                            quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
                            ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
                            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                            voluptatibus maiores alias consequatur aut perferendis doloribus
                            asperiores repellat."
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticlesPage