import { useNavigate } from 'react-router-dom';

import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css'

function NewProject() {

    const history = useNavigate()

    async function createPost(project) {
        const config = {
            method: 'POST',
            body: JSON.stringify(project)
        }
        const response = await fetch('http://localhost:5000/projects', config)
        const data = await response.json()
        console.log(data)
        alert('Prjeto eviando com sucesso')
        history('/project')


        
        // initialize cost ans services
        // project.cost = 0
        // project.services = []
        // fetch('http://localhost:5000/projects', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(project)
        // }).then((resp => resp.json())
        // .then((data) => {
        //     console.log(data)
        //     //redirect
        //     history.push('/project', {message: 'Projeto criado om sucesso!'})
        // })
        // ).catch(err => console.log(err))
    };

    return (
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handLeSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
};

export default NewProject;