#!/bin/bash

# Variables
ISTIO_VERSION="1.20.0"

# Descarga e instalación de Istio
echo "Descargando Istio $ISTIO_VERSION..."
curl -L https://istio.io/downloadIstio | ISTIO_VERSION=$ISTIO_VERSION sh -
export PATH="$PATH:$(pwd)/istio-$ISTIO_VERSION/bin"

# Instalación de Istio con perfil demo
echo "Instalando Istio con perfil demo..."
istioctl install --set profile=demo -y

# Verifica la instalación de Istio
echo "Verificando instalación de Istio..."
kubectl get pods -n istio-system

# Habilitar addons: Kiali, Grafana, Jaeger
echo "Habilitando Kiali, Jaeger y Grafana..."
kubectl apply -f istio-$ISTIO_VERSION/samples/addons

# Espera a que los servicios estén listos
echo "Esperando que los servicios de Kiali, Grafana y Jaeger estén listos..."
kubectl rollout status deployment/kiali -n istio-system
kubectl rollout status deployment/grafana -n istio-system
kubectl rollout status deployment/jaeger -n istio-system

# Despliegue de la aplicación en Kubernetes
echo "Desplegando aplicación en Kubernetes..."
kubectl apply -f 4-application-no-istio.yaml

# Despliegue de canary con Istio
echo "Configurando Canary Deployment y Circuit Breaker..."
kubectl apply -f 5-canary-deployment-istio.yaml
kubectl apply -f 6-circuit-breaker.yaml

# Mostrar estado de los servicios
echo "Mostrando servicios en el namespace 'goty-pdn'..."
kubectl get svc -n goty-pdn

# Instrucciones para acceder a los plugins
echo "Para acceder a Kiali, ejecuta: kubectl port-forward svc/kiali -n istio-system 20001:20001"
echo "Para acceder a Grafana, ejecuta: kubectl port-forward svc/grafana -n istio-system 3000:3000"
echo "Para acceder a Jaeger, ejecuta: kubectl port-forward svc/jaeger-query -n istio-system 16686:16686"

echo "Instalación y despliegue completados."