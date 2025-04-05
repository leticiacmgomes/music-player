import '../css/SongInfo.css'

export const SongInfo = ({song, singer}) => {
  return(
    <section class="songInfo">
      <h1 className="nameSong">{song}</h1>
      <h2 className="singer">{singer}</h2>
    </section>
  )
}