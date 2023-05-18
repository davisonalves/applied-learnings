echo "Running Cypress e2e tests headlessly without copying files"

docker run -it -v $PWD:/e2e -w /e2e cypress/included:12.12.0