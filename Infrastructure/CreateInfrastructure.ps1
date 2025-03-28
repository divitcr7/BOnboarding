# Set Variables
$resourceGroupName = "bb-cus-dev-onboarding-rg"
$location = "CentralUS"
$appServicePlanName = "bb-cus-dev-onboarding-asp"

az login --use-device-code

# Create Resource Group (if it doesn't exist)
az group create --name $resourceGroupName --location $location

az appservice plan create `
--name $appServicePlanName `
--resource-group $resourceGroupName `
--location $location `
--sku B1

$integrationAppName = "bb-cus-dev-onboarding-frontend-app"
az webapp create `
  --name $integrationAppName `
  --resource-group $resourceGroupName `
  --plan $appServicePlanName 


az webapp deployment source config-local-git `
  --name $integrationAppName `
  --resource-group $resourceGroupName

git remote add azure 'https://$bb-cus-dev-onboarding-frontend-app@bb-cus-dev-onboarding-frontend-app.scm.azurewebsites.net/bb-cus-dev-onboarding-frontend-app.git'

