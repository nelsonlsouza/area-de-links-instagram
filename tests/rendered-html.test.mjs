import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

/** Garante que a página apresente todas as áreas definidas para o projeto. */
test("mantém as áreas principais na página inicial", async () => {
  const page = await readFile(new URL("app/page.tsx", projectRoot), "utf8");
  assert.match(page, /Projetos para carreira/);
  assert.match(page, /status: "Em breve", disabled: true/);
  assert.match(page, /Portfólio de desenvolvimento/);
  assert.match(page, /Projetos profissionais e acadêmicos/);
  assert.match(page, /Conteúdos gratuitos/);
  assert.match(page, /Vamos conversar/);
});

/** Evita que alterações futuras removam os links profissionais essenciais. */
test("mantém os canais profissionais configurados", async () => {
  const page = await readFile(new URL("app/page.tsx", projectRoot), "utf8");
  assert.match(page, /github\.com\/nelsonlsouza/);
  assert.match(page, /linkedin\.com\/in\/nelsonlsouza/);
  assert.match(page, /instagram\.com\/nelsonn\.dev/);
  assert.match(page, /wa\.me\/5592984588149/);
  assert.match(page, /nelsonsouza0328@gmail\.com/);
});

/** Confere idioma, título e descrição usados pelos buscadores. */
test("mantém os metadados em português", async () => {
  const layout = await readFile(new URL("app/layout.tsx", projectRoot), "utf8");
  assert.match(layout, /lang="pt-BR"/);
  assert.match(layout, /Nelson Souza \| Desenvolvedor de Software/);
  assert.match(layout, /portfólio, projetos, contatos e conteúdos gratuitos/);
});
