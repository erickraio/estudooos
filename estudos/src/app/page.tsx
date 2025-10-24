import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Comandos para o Git</h2>
      <h1>Comandos mais importantes para o Git</h1>
      <p>git add .</p>
      <p>git commit -m "#Mensagem"</p>
      <p>git push origin</p>
      <p>git pull </p>
      <p>git branch "#NomeDaBranch"</p>
      <p>git switch "#NomeDaBranch"</p>

      <h1>Comandos adicionais</h1>
      <p>Git status</p>
      <p>Git commit --amend -m "#NovaMensagem"</p>
      <p>Git stash (Volta o arquivo pra versão anterior)</p>
      <p>Git log</p>
      <p>Git revert "#IdDoCommit"</p>
      <p>Git diff "#IdDoCommit" "#IdDoOutroCommit"</p>
      <p>Git branch -d "#BranchPraDeletar"</p>
    </div>
  );
}
