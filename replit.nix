{ pkgs }: {
	deps = [
		pkgs.wget
  pkgs.firefox-esr-91-unwrapped
  pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.yarn
        pkgs.replitPackages.jest
	];
}