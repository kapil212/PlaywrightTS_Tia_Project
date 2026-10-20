pipeline {
    agent any

    environment {
        IMAGE_NAME = 'tia-tests'
    }

    stages {
        stage('Verify Environment') {
            steps {
                sh 'docker --version'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} -t ${IMAGE_NAME}:latest .'
            }
        }
    }
}