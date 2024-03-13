import '../../utils/style/Faq.css'; 

const faqs = [
    {
        id: 1,
        title: "Qu'est‑ce que E-reperee ?",
        content: "Le service X permet aux amis, aux familles et aux collègues d'échanger et de rester en contact grâce à l'envoi rapide et régulier de messages. Les utilisateurs publient des posts, qui peuvent contenir des photos, des vidéos, des liens et du texte. Ces messages sont publiés sur votre profil, sont transmis à vos abonnés et peuvent être retrouvés via la recherche X. Découvrez comment utiliser X."
    }, 
    {
        id: 2,
        title: "De quoi ai‑je besoin pour utiliser X ?",
        content: "Une simple connexion à Internet ou un téléphone mobile suffisent pour utiliser X. Inscrivez‑vous ici ! Une fois connecté, vous pouvez commencer à rechercher et à suivre des comptes dont les posts vous intéressent. Nous vous recommandons des comptes susceptibles de vous plaire après votre inscription."
    },
    {
        id: 3,
        title: "Qu'est‑ce qu'un post ?",
        content: "Un repost est un post que vous transférez à vos abonnés."
    }, 
    {
        id: 4,
        title: "Qu'est‑ce que E-reperee ?",
        content: "Le service X permet aux amis, aux familles et aux collègues d'échanger et de rester en contact grâce à l'envoi rapide et régulier de messages. Les utilisateurs publient des posts, qui peuvent contenir des photos, des vidéos, des liens et du texte. Ces messages sont publiés sur votre profil, sont transmis à vos abonnés et peuvent être retrouvés via la recherche X. Découvrez comment utiliser X."
    }, 
    {
        id: 5,
        title: "De quoi ai‑je besoin pour utiliser X ?",
        content: "Une simple connexion à Internet ou un téléphone mobile suffisent pour utiliser X. Inscrivez‑vous ici ! Une fois connecté, vous pouvez commencer à rechercher et à suivre des comptes dont les posts vous intéressent. Nous vous recommandons des comptes susceptibles de vous plaire après votre inscription."
    },
    {
        id: 6,
        title: "Qu'est‑ce qu'un post ?",
        content: "Un repost est un post que vous transférez à vos abonnés."
    },
    {
        id: 7,
        title: "Qu'est‑ce que E-reperee ?",
        content: "Le service X permet aux amis, aux familles et aux collègues d'échanger et de rester en contact grâce à l'envoi rapide et régulier de messages. Les utilisateurs publient des posts, qui peuvent contenir des photos, des vidéos, des liens et du texte. Ces messages sont publiés sur votre profil, sont transmis à vos abonnés et peuvent être retrouvés via la recherche X. Découvrez comment utiliser X."
    }, 
    {
        id: 8,
        title: "De quoi ai‑je besoin pour utiliser X ?",
        content: "Une simple connexion à Internet ou un téléphone mobile suffisent pour utiliser X. Inscrivez‑vous ici ! Une fois connecté, vous pouvez commencer à rechercher et à suivre des comptes dont les posts vous intéressent. Nous vous recommandons des comptes susceptibles de vous plaire après votre inscription."
    },
    {
        id: 9,
        title: "Qu'est‑ce qu'un post ?",
        content: "Un repost est un post que vous transférez à vos abonnés."
    },
    {
        id: 10,
        title: "Qu'est‑ce que E-reperee ?",
        content: "Le service X permet aux amis, aux familles et aux collègues d'échanger et de rester en contact grâce à l'envoi rapide et régulier de messages. Les utilisateurs publient des posts, qui peuvent contenir des photos, des vidéos, des liens et du texte. Ces messages sont publiés sur votre profil, sont transmis à vos abonnés et peuvent être retrouvés via la recherche X. Découvrez comment utiliser X."
    }, 
    {
        title: "De quoi ai‑je besoin pour utiliser X ?",
        content: "Une simple connexion à Internet ou un téléphone mobile suffisent pour utiliser X. Inscrivez‑vous ici ! Une fois connecté, vous pouvez commencer à rechercher et à suivre des comptes dont les posts vous intéressent. Nous vous recommandons des comptes susceptibles de vous plaire après votre inscription."
    },
    {
        title: "Qu'est‑ce qu'un post ?",
        content: "Un repost est un post que vous transférez à vos abonnés."
    },
]

export function Faq()
{

    //Get the last five title in the faqs
    const lastElements = faqs.slice(-5); 

    return (
        <section className="faqs">

            <div className="table-of-content">
                <ul>
                {
                    lastElements.map(faq =>
                        <li><a href={`#ancre-${faq.title}`}>{faq.title}</a></li>
                    )
                }
                </ul>
             
            </div>

            <div className="faq-content">
                <h1>Guide de l'utilisateur</h1>
                {
                    faqs.map(faq =>
                        <div id={`ancre-${faq.title}`}> 
                            <h3>{faq.title}</h3>
                            <p>{faq.content}</p>
                            <hr />
                        </div>
                    )
                }
            </div>
        </section>
    )
}