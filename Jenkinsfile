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


        stage('Build image') {
            steps {
                script {
                    dockerImage = docker.build dockerimagename + ":$BUILD_NUMBER"
                }
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
}