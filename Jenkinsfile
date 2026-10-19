pipeline{

    agent any

    stages {

        stage ('Checkout') {

            steps {
                checkout scm
            }


        }

        stage ('Verify environment') {

            steps {

                sh 'node --version || echo "node not found on Jenkins agent — expected, we will use Docker next"'
                sh 'docker --version'
                sg 'ls -la'
            }


        }


    }

}