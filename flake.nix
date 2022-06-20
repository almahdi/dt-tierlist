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
          nodePackages.yarn
          nodePackages.prettier
        ];
        shellHook = with pkgs; ''
          export PATH="$PWD/node_modules/.bin/:$PATH"
          alias scripts='jq ".scripts" package.json'
          export PS1="(nodejs) \[\033[1;32m\][\u@\h:\w]\$\[\033[0m\]"
          npm set prefix ~/.npm-global
          export PATH=$PATH:~/.npm-global/bin
        '';
      };
    };
}
