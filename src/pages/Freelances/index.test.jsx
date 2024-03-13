import { rest } from 'msw' 
import { setupServer } from 'msw/node'
import { waitFor, render, screen } from '@testing-library/react'
import Freelances from './'

const server = setupServer(

    //On précise l'url qui faut interceptée
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
        //On passe des datas mockés dans ce qui est retournés dans 
        return res(ctx.json({}))
    })
)

//Activer la simulation d'API avant le test
beforeAll(() => server.listen())

//Réinitialiser tout ce qui qu'on aurait ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.resetHandlers())

//Fermer la simulation d'API une fois que les tests sont finis 
afterAll(() => server.close())

