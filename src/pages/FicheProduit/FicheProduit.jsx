import { useParams } from "react-router-dom"

export const FicheProduit = ()=> {
    // ilaina rehefa anao get by Id
    const { id } = useParams()
    return (
        <div>
            <div className="left-content" >
                {/* Ato no atao le carouselle */}
            </div>
            <div className="right-content" >
                <h3>Lot 359: Nom du produit</h3>
                <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quidem quibusdam perferendis? Alias officiis amet odit. Dolor nobis rerum eius, at aperiam expedita illo quos? Eveniet deserunt dolore fugiat. Aliquam!
                    Esse debitis rerum cumque velit fugiat laboriosam aliquam obcaecati ad perspiciatis totam maiores minima eveniet quia expedita quaerat beatae soluta pariatur, consequatur explicabo exercitationem nisi adipisci, voluptates doloremque! Culpa, laboriosam.
                    Dolores dolorum enim aliquid ullam eius sapiente saepe architecto sit. Id, nihil commodi! Nam suscipit omnis rem aliquid, excepturi saepe maxime, molestiae qui culpa praesentium quasi eaque, iste molestias doloremque?
                    Debitis dolores doloribus vel ea sunt, eaque id repudiandae obcaecati illo distinctio omnis natus maxime adipisci possimus itaque repellat quod eligendi voluptates inventore temporibus sequi a repellendus? Totam, quasi pariatur.
                    Atque, dolor perspiciatis doloremque dolorum maxime itaque provident, aut quasi obcaecati minima suscipit cupiditate sunt et nesciunt illo beatae, eius ratione. Modi non voluptatum animi inventore rerum veritatis laboriosam error.
                    Eaque, officiis consequatur. Consectetur cumque sunt, delectus ipsam, provident culpa explicabo quaerat facere officia eum animi architecto reprehenderit cum nemo ipsa suscipit saepe accusamus! Et reprehenderit temporibus autem porro corporis.
                    Ea odit quidem harum omnis eligendi illo aliquid delectus, accusantium minus laudantium ipsa eveniet expedita laborum, perferendis libero quaerat fuga ut earum! Illum fugiat similique beatae nobis tenetur ducimus iste?
                    Nostrum totam ea architecto neque aspernatur aliquam asperiores sit, illo consectetur aliquid. Perspiciatis minus provident explicabo, officia sunt nesciunt vitae nisi, maxime ipsa consequatur recusandae illo ex architecto excepturi natus.
                    Aperiam unde ipsa voluptatibus ab voluptas nulla, blanditiis sunt quasi incidunt, sit aliquam amet? Fuga sed assumenda repellat nisi quidem alias sequi quasi quam, vero doloremque molestiae quisquam explicabo consequatur.
                    Ipsum quaerat, quas rem iure atque consectetur reprehenderit minus voluptas provident. Itaque dolor recusandae voluptatem sed laborum modi quae cumque! Sapiente libero minima omnis, temporibus fugiat id dignissimos voluptatem aspernatur.
                </div>
                <div>
                    <p>debut enchere: <strong>date</strong></p>
                    <p>Fin enchere: <strong>date</strong></p>
                    <p>Prix initial: <strong>date</strong></p>
                    <p>Derniere enchere: <strong>date</strong></p>
                </div>
            </div>
        </div>
    )
}