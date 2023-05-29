#!/bin/sh

# Bootstrap script for setting up and entering a local dotnet environment
# without having to actually install dotnet on your linux machine
#
# Dependencies:
# - curl

LOCAL_DOTNET_LOCATION="$(pwd)/dotnet"
export DOTNET_ROOT="$(pwd)/dotnet"
SDK_LINK="https://download.visualstudio.microsoft.com/download/pr/351400ef-f2e6-4ee7-9d1b-4c246231a065/9f7826270fb36ada1bdb9e14bc8b5123/dotnet-sdk-7.0.302-linux-x64.tar.gz"

setup_dotnet() {
    if [ -e "$LOCAL_DOTNET_LOCATION" ]; then
        echo "File at local dotnet install location ($LOCAL_DOTNET_LOCATION) already exists, aborting!"
        return 1
    fi
    mkdir -p "$LOCAL_DOTNET_LOCATION"
    curl "$SDK_LINK" > "/tmp/dotnet-sdk.tar.gz"
    tar zxf "/tmp/dotnet-sdk.tar.gz" -C "$LOCAL_DOTNET_LOCATION"
    rm "/tmp/dotnet-sdk.tar.gz"
}

if [ ! -d "$LOCAL_DOTNET_LOCATION" ]; then
    read -p "Dotnet environment not set up, set up environment? [y/n] " yn_res
    case "$yn_res" in
        [Yy]*) setup_dotnet ;;
        [Nn]*) echo "Aborted!"; return 1 ;;
    esac
fi

export PATH="$PATH:$LOCAL_DOTNET_LOCATION:$LOCAL_DOTNET_LOCATION/tools"
echo "Bootstrap complete."
