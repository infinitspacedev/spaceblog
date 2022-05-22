export default function Home(){
    return(
        <>
		<div class="container">
		
		<input type="radio" name="radio" checked="checked" id="radio-nav-1" />
		<span>Home</span>
		<input type="radio" name="radio" id="radio-nav-2" />
		<span>Turismo</span>
		<input type="radio" name="radio" id="radio-nav-3" />
		<span>News</span>
		<input type="radio" name="radio" id="radio-nav-4" />
		<span>Sports</span>
		<input type="radio" name="radio" id="radio-nav-5" />
		<span>Jogos</span>

		
		<div class="scroll">
			<section class="section" id="section-1">
				<div class="logo">
					<span>Space🌎</span>
				</div>
				
				<h2>Em@ranhando</h2>
					
				
					<p>
					<iframe width="350" height="200" src="https://www.youtube.com/embed/kgDsQ-40E-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br></br><br></br><a>Uma das mais belas riquesas naturais do nosso estado</a><br></br><br></br><a href='xxxxxx'>xxxxxx</a><br></br>
						<a href='xxxxxx'>xxxxxx</a>
						<br></br>
						<a href='xxxxxx'>xxxxxx</a>
						
					</p>
			</section>

			<section class="section" id="section-2">
				<div class="logo">
					<span>Turismo</span>
				</div>
				
					<h2>Delta das @mericas</h2>
					
				
				<p>
				<iframe width="350" height="200" src="https://www.youtube.com/embed/a1LqhpXdu-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br></br><a>Uma das mais belas riquesas naturais do nosso estado</a><hr></hr><a href='xxxxxx'>xxxxxx</a><br></br>
					<a href='xxxxxx'>xxxxxx</a>
					<br></br>
					<a href='xxxxxx'>xxxxxx</a>
					
				</p>
			</section>

			<section class="section" id="section-3">
				<div class="logo">
					<span>news</span>
				</div>
				<h2>Noticias</h2>
					<p>
						<img src='/todosjornais.jpg'width={350}height={250}></img>
						<br></br><a href='noticias'>Noticias ao vivo 24hs</a><br></br>
				<a href="/curiosidades">curiosidades</a>
					</p>

				
				
				
					
				
				
			</section>

			<section class="section" id="section-4">
				<div class="logo">
					<span>Sports</span>
				</div>
				<h2>Sports</h2>
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
				<div id='link'><a href='/corona'>Corona game(facil)</a><br></br><br></br>
				<a href="/avioes">avioes(medio)</a>
				<br></br><br></br>
				<a href="/chadrex">xadrex(dificel)</a>
				</div>
			</section>
		</div>
	</div>
</>
        
    )
}