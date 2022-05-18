export default function Home(){
    return(
        <>
		<div class="container">
		
		<input type="radio" name="radio" checked="checked" id="radio-nav-1" />
		<span>Home</span>
		<input type="radio" name="radio" id="radio-nav-2" />
		<span>Sobre</span>
		<input type="radio" name="radio" id="radio-nav-3" />
		<span>Filmes</span>
		<input type="radio" name="radio" id="radio-nav-4" />
		<span>Series</span>
		<input type="radio" name="radio" id="radio-nav-5" />
		<span>Jogos</span>

		
		<div class="scroll">
			<section class="section" id="section-1">
				<div class="logo">
					<span>Space🌎</span>
				</div>
				<h2>SpaceDev🌎</h2>
				<p>
					é a mais recente evolução do padrão que define o desenvolvimento web.  
					É uma nova versão  com novos elementos, atributos, e comportamentos. em um conjunto maior de 
					tecnologias que permite o desenvolvimento de aplicações e web sites mais diversos e poderosos.
				</p>
			</section>

			<section class="section" id="section-2">
				<div class="logo">
					<span>Sobre</span>
				</div>
				<h2>Quem somos</h2>
				<p>
					uma encubadora de desenvolvimento de sistemas,marketing digital e entreterimento .
					 Baixe videos,filmes, series e jogos para se divertir
				</p>
			</section>

			<section class="section" id="section-3">
				<div class="logo">
					<span>filmes</span>
				</div>
				<h2>Filmes</h2>
				<div id='link'>
					
					
				</div>
				
			</section>

			<section class="section" id="section-4">
				<div class="logo">
					<span>Series</span>
				</div>
				<h2>Series</h2>
				<div id='link'>
				<a href='/simpson'>SIMPSONS... lista de episodios</a><br></br><br></br>
				<a href='/futurama'>FUTURAMA... lista de episodios</a><br></br><br></br>
				<a href='/bojack'>BOJACK... lista de episodios</a>
			
				</div>
			</section>

			<section class="section" id="section-5">
				<div class="logo">
					<span>Jogos</span>
				</div>
				<h2>Jogos</h2>
				<div id='link'><a href='/corona'>Corona game</a><br></br><br></br>
				<a href="/avioes">avioes</a>
				<br></br><br></br>
				<a href="/chadrex">chadrex</a>
				</div>
			</section>
		</div>
	</div>
</>
        
    )
}