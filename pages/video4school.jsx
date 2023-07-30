export default function video4school() {
  return (
    <article className="container">
      <h1>Video 4 School</h1>

      <hr />

      <h3>Dados da empresa</h3>

      <ul>
        <li>
          <a target="_blank" href="/api/video4school/empresa">
            /empresa
          </a>
        </li>
      </ul>

      <h3>Hero</h3>

      <ul>
        <li>
          <a target="_blank" href="/api/video4school/hero">
            /hero
          </a>
        </li>
      </ul>

      <h3>Patrocinadores</h3>

      <ul>
        <li>
          <a target="_blank" href="/api/video4school/patrocinadores">
            /patrocinadores
          </a>
        </li>
      </ul>

      <h3>Colégio matérias</h3>

      <ul>
        <li>
          <a target="_blank" href="/api/video4school/colegio/materias">
            /colegio/materias
          </a>
        </li>
      </ul>

      <h3>Colégio - Cursos</h3>

      <ul>
        <li>
          <a target="_blank" href="/api/video4school/colegio/cursos">
            /colegio/cursos
          </a>
        </li>

        <li>
          <a target="_blank" href="/api/video4school/colegio/curso/[slug]">
            /colegio/curso/[slug]
          </a>
        </li>
      </ul>

      <h3>Colégio - Séries</h3>

      <ul>
        <li>
          <a target="_blank" href="/api/video4school/colegio/cursos">
            /colegio/cursos
          </a>
        </li>
      </ul>

      <h3>Depoimentos</h3>

      <ul>
        <li>
          <a
            target="_blank"
            href="/api/video4school/depoimentos?type=professores"
          >
            /depoimentos?type=[professores|alunos]
          </a>
        </li>
      </ul>

      <h3>Ranking</h3>

      <ul>
        <li>
          <a target="_blank" href="/api/video4school/ranking/1">
            /ranking/[ranking_id]
          </a>
        </li>
      </ul>

      <h3>Autor do curso</h3>

      <ul>
        <li>
          <a target="_blank" href="/api/video4school/autor-do-curso">
            /autor-do-curso
          </a>
        </li>
      </ul>

      <h3>Dashboard/ranking</h3>

      <ul>
        <li>
          <a target="_blank" href="/api/video4school/dashboard/ranking">
            /dashboard/ranking
          </a>
        </li>
      </ul>

      <h3>Dashboard/quiz</h3>

      <ul>
        <li>
          <a target="_blank" href="/api/video4school/dashboard/quiz/1">
            /dashboard/quiz
          </a>
        </li>
      </ul>

      <h3>Dashboard/pedidos</h3>

      <ul>
        <li>
          <a target="_blank" href="/api/video4school/dashboard/pedidos">
            /dashboard/pedidos
          </a>
        </li>
      </ul>

      <h3>Dashboard/pedidos/afiliado</h3>

      <ul>
        <li>
          <a
            target="_blank"
            href="/api/video4school/dashboard/pedidos/afiliado"
          >
            /dashboard/pedidos/afiliado
          </a>
        </li>
      </ul>

      <h3>Dashboard/mensagens/chats</h3>

      <ul>
        <li>
          <a target="_blank" href="/api/video4school/dashboard/mensagens/chats">
            /dashboard/mensagens/chats
          </a>
        </li>
      </ul>

      <h3>Dashboard/mensagens/[id]</h3>

      <ul>
        <li>
          <a target="_blank" href="/api/video4school/dashboard/mensagens/1">
            /dashboard/mensagens/[id]
          </a>
        </li>
      </ul>

      <h3>Dashboard/Tutoriais</h3>

      <ul>
        <li>
          <a target="_blank" href="/api/video4school/dashboard/tutoriais">
            /dashboard/Tutoriais
          </a>
        </li>
      </ul>

      <h3>Dashboard/seguranca/dispositivos</h3>

      <ul>
        <li>
          <a
            target="_blank"
            href="/api/video4school/dashboard/seguranca/dispositivos"
          >
            /dashboard/seguranca/dispositivos
          </a>
        </li>
      </ul>
    </article>
  );
}

