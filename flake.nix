{
  inputs = { nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable"; };

  outputs = { self, nixpkgs, ... }:
    let
      pkgs = import nixpkgs {
        system = "x86_64-linux";
        overlays = [ ];
        config = {
          allowUnfree = true;
          allowBroken = true;
        };
      };
    in {

      devShell.x86_64-linux = pkgs.mkShell {
        buildInputs = with pkgs; [
          nodejs
          jq
          nodePackages.prisma
          nodePackages.yarn
          nodePackages.prettier
        ];
        shellHook = with pkgs; ''
          export PATH="$PWD/node_modules/.bin/:$PATH"
          alias scripts='jq ".scripts" package.json'
          export PS1="(nodejs) \[\033[1;32m\][\u@\h:\w]\$\[\033[0m\]"
          export PRISMA_MIGRATION_ENGINE_BINARY="${prisma-engines}/bin/migration-engine"
          export PRISMA_QUERY_ENGINE_BINARY="${prisma-engines}/bin/query-engine"
          export PRISMA_QUERY_ENGINE_LIBRARY="${prisma-engines}/lib/libquery_engine.node"
          export PRISMA_INTROSPECTION_ENGINE_BINARY="${prisma-engines}/bin/introspection-engine"
          export PRISMA_FMT_BINARY="${prisma-engines}/bin/prisma-fmt"
          npm set prefix ~/.npm-global
          export PATH=$PATH:~/.npm-global/bin
        '';
      };
    };
}
