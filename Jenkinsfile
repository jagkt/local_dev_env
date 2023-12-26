pipeline {

    environment {
        dockerimagename = "jagkt/local_dev_env"
        dockerImage = ""
    }

    agent any

    stages {
        stage('Checkout Source') {
            steps {
                git branch: 'main ', url: 'https://github.com/jagkt/local_dev_env.git'
            }
        }


        stage('Docker Compose Build image') {
            steps {
                    sh "docker-compose build"
                    sh "docker-compose up -d py_app node_app"
                    // dockerImage = docker.build dockerimagename + ":$BUILD_NUMBER"
            }
        }


        // stage('Pushing image') {
        //     environment {
        //         registryCredential = 'dockerhub_cred'
        //     }
        //     steps {
        //         script {
        //             docker.withRegistry(
        //                 'https://registry.hub.docker.com', registryCredential) {
        //                 dockerImage.push("$BUILD_NUMBER")
        //                 dockerImage.push("latest")
        //             }
        //         }
        //     }
        // }
    }

    // post {
    //     always {
    //         sh "docker-compose down || true"
    //         }
    //     }   
}