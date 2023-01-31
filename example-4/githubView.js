class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.model.setRepoInfo(repoData);

        this.display();
      });
    });
  }

  display() {
    const repoData = this.model.getRepoInfo();

   const repoNameEl = document.querySelector('#repo-name');
   repoNameEl.textContent = repoData.full_name;

   const repoDescEl = document.querySelector('#repo-description');
   repoDescEl.textContent = repoData.description;

   const imgEl = document.querySelector('#image');
   imgEl.src = repoData.organization.avatar_url;
  }
}

module.exports = GithubView;