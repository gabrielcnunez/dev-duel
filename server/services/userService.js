const onlyUnique = array => [...new Set(array)]

const isForker = repos =>
  repos.filter(repo => repo.fork).length > repos.length / 2 ? 'Forker' : ''

const isOneTrickPony = repos => {
  console.log(
    onlyUnique(repos.map(repo => repo.language)).filter(language => language)
  )
  return onlyUnique(
    repos.map(repo => repo.language).filter(language => language)
  ).length === 1
    ? 'One-Trick Pony'
    : ''
}

const isJackOfAllTrades = repos =>
  onlyUnique(repos.map(repo => repo.language).filter(language => language))
    .length >= 10
    ? 'Jack of all Trades'
    : ''

const isStalker = user =>
  user.following > 0 && user.following > user.followers * 2 ? 'Stalker' : ''

const isMrPopular = user =>
  user.followers > 0 && user.followers > user.following * 2 ? 'Mr. Popular' : ''

const languageTotals = repos =>
  repos
    .map(repo => repo.language)
    .filter(language => language)
    .reduce(
      (languageTotals, language) => ({
        ...languageTotals,
        [language]: languageTotals[language] ? languageTotals[language] + 1 : 1
      }),
      {}
    )

const favoriteLanguage = repos => {
  if (repos.length > 0 && Object.keys(languageTotals(repos)).length > 0) {
    return Object.entries(languageTotals(repos)).sort(([, a], [, b]) => b - a)[0][0]
  } else {
    return ""
  }
}
  

const totalStars = repos =>
  repos.reduce((total, repo) => total + repo['stargazers_count'], 0)

const highestStarred = repos =>
  repos.reduce(
    (highest, repo) =>
      highest > repo['stargazers_count'] ? highest : repo['stargazers_count'],
    0
  )

const perfectRepos = repos =>
  repos.reduce(
    (perfect, repo) => (repo['has_issues'] ? perfect + 1 : perfect),
    0
  )

const userMapper = (user, repos) => ({
  username: user.login,
  name: user.name,
  location: user.location,
  bio: user.bio,
  avatar_url: user['avatar_url'],
  titles: [
    isForker(repos),
    isOneTrickPony(repos),
    isJackOfAllTrades(repos),
    isStalker(user),
    isMrPopular(user)
  ].filter(title => title),
  'favorite-language': favoriteLanguage(repos),
  'public-repos': user['public_repos'],
  'total-stars': totalStars(repos),
  'highest-starred': highestStarred(repos),
  'perfect-repos': perfectRepos(repos),
  followers: user.followers,
  following: user.following
})

export default userMapper
