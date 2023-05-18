echo "Running Cypress e2e tests headlessly without copying files"

docker run -it -v %cd%:/e2e -w /e2e cypress/included:12.12.0