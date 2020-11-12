#!groovy

def publish = false
if (githubOrgVars.branchName() == "master") {
  publish = true
}

nodejsLibrary.build(publish)
