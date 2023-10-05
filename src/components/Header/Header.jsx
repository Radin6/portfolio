import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="title">
        <h1 className="title-myName">Hi, I am Nicolás</h1>
        <h2 className="title-dev">Full-Stack Developer</h2>
      </div>
      <picture>
        <img className="profile-pic" src="/profile-pic.png"></img>
      </picture>
    </header>
  );
}
