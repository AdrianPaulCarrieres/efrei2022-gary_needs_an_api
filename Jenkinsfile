pipeline {
    agent any

    tools {
        nodejs "node 18"
    }
    
    environment {
        LOGIN = "login"
        COULEUR = "blue"
    }

    stages {
        stage('Git checkout') {
            steps {
                // Get some code from a GitHub repository
                git branch: 'main',
                    credentialsId: 'e97d8719-eef4-4bd2-af17-6657e3b4f3c3',
                    url: 'https://github.com/AdrianPaulCarrieres/efrei2022-gary_needs_an_api'
            }
        }
        stage('github webhook stage') {
            steps {
                sh 'ls -ali'
            }
        }
        stage('NPM install') {
            steps {
                sh 'npm install'
            }
        }
        stage('NPM test') {
            steps {
                sh 'npm run test'
            }
        }
    }
    post {
        failure {
            emailext body: 'Ce build $BUILD_NUMBER a échoué',
                     recipientProviders: [requestor()], 
                     subject: 'build',
                     to: 'adrian-paul.carrieres@efrei.net'
        }
    }
}
