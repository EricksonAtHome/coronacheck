import React from 'react';

const App = () => {
  const gridCard = [
    'Hoe werkt de CoronaCheck-app?',
    'Wanneer kan ik een vaccinatiebewijs maken?',
    'Ik heb geen Nederlands vaccinatiebewijs gekregen, wel een internationaal vaccinatiebewijs. Wat kan ik doen?',
    'Ik wil liever een QR-code uitprinten. Hoe werkt het papieren bewijs?',
    'Welke informatie staat in mijn QR-code?',
    'Het lukt niet om een bewijs te maken in CoronaCheck, wat kan ik doen?',
  ];

  const footerOverLinks = [
    'Privacy',
    'Cookies',
    'Colofon',
    'Toegankelijkheids­verklaring',
    'Kwetsbaarheid melden',
    'Pers',
  ];

  const footerMeerLinks = [
    'Status',
    'Wegwijzer',
    'Wijs op Reis',
    'Kijk op rijksoverheid.nl ',
  ];

  return (
    <>
      <div className='bg-gray-100'>
        {/* Navbar */}
        <div className='grid grid-cols-3'>
          <div className='px-8 py-10 font-bold text-blue-600'>CoronaCheck</div>

          <img src='/img/logo-RO.svg' alt='' className='mx-auto' />

          <div className='flex'>
            <div className='px-6 py-8 font-bold text-blue-600'>
              Meestgestelde vragen
            </div>

            <div className='px-6 py-8'>
              <div className='bg-white px-4 py-2 rounded-md text-blue-600'>
                Taal: <span className='font-bold'>Nederlands</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile QR */}
        <div className='grid grid-cols-4 max-w-full lg:max-w-6xl px-6 mt-10 mx-auto'>
          <div className='hidden md:block md:col-span-1 relative'>
            <img
              src='/img/Home_NL_Header.png'
              alt=''
              className='absolute bottom-0'
            />
          </div>

          <div className='col-span-4 md:col-span-3 lg:col-span-2 px-8'>
            <div className='text-5xl font-bold leading-relaxed'>
              Krijg toegang met de CoronaCheck-app
            </div>

            <div className='mt-8 pb-12'>
              <p>
                Met de app bewijs je dat je gevaccineerd of negatief getest
                bent. Of dat je eerder corona hebt gehad. Je kunt CoronaCheck
                gebruiken voor toegang tot bepaalde plekken. Of om naar andere
                landen te reizen.
              </p>

              <div className='mt-8'>
                <img
                  src='/img/app-store-badge-nl.svg'
                  alt=''
                  className='w-28 inline mr-4'
                />
                <img
                  src='/img/google-play-badge-nl.svg'
                  alt=''
                  className='w-28 inline '
                />
              </div>
            </div>
          </div>

          <div className='hidden lg:block'>
            <img src='/img/Home_Header_Person.svg' alt='' />
          </div>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className='text-3xl font-bold text-center mt-14'>Hoe werkt het?</div>

      <div className='grid grid-cols-3 gap-16 px-6 mt-10 max-w-full lg:max-w-6xl mx-auto'>
        <div className='col-span-3 md:col-span-1'>
          <img src='/img/Home_NL_Iphone1.png' alt='' className='w-32 mx-auto' />

          <div className='text-xl font-bold mt-8'>
            1. Laat je testen of vaccineren
          </div>

          <div className='mt-4'>
            Voor toegang vragen sommige landen of plekken een bewijs van een
            vaccinatie of van een uitslag van een coronatest.
          </div>
        </div>
        <div className='col-span-3 md:col-span-1'>
          <img src='/img/Home_NL_Iphone2.png' alt='' className='w-32 mx-auto' />

          <div className='text-xl font-bold mt-8'>2. Maak een QR-code</div>

          <div className='mt-4'>
            De app maakt twee QR-codes: een QR-code voor Nederland en een
            internationale. Dat is jouw bewijs.
          </div>
        </div>
        <div className='col-span-3 md:col-span-1'>
          <img src='/img/Home_NL_Iphone3.png' alt='' className='w-32 mx-auto' />

          <div className='text-xl font-bold mt-8'>3. Toon je QR-code</div>

          <div className='mt-4'>
            Laat je identiteitsbewijs en je QR-code controleren voor toegang tot
            een bepaalde plek. En als je op reis gaat.
          </div>
        </div>
      </div>

      {/* Wide Card 1 */}
      <div className='mt-14 max-w-full lg:max-w-6xl mx-auto'>
        <div className='bg-green-50 p-8 pb-0 grid grid-cols-2'>
          <div className='col-span-2 md:col-span-1 relative'>
            <img
              src='/img/printbewijs.png'
              alt=''
              className='w-64 mx-auto absolute bottom-0'
            />
          </div>

          <div className='col-span-2 md:col-span-1'>
            <div className='text-2xl font-bold'>
              Liever een papieren bewijs?
            </div>

            <div className='mt-4'>
              Een bewijs op papier is handig als je geen smartphone hebt. Je
              kunt een bewijs maken van een vaccinatie en/of van een
              testuitslag.{' '}
              <span className='underline text-blue-500'>
                Lees hier meer over bewijzen op papier
              </span>
              .
            </div>

            <div className='mt-6 pb-6'>
              <button className='rounded-full bg-blue-800 border-2 border-blue-800 text-white hover:bg-white hover:text-blue-800 font-bold px-12 py-4'>
                Maak papieren bewijs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Wide Card 2 */}
      <div className='mt-14 max-w-full lg:max-w-6xl mx-auto'>
        <div className='p-8 pb-0 grid grid-cols-2'>
          <div className='col-span-2 md:col-span-1'>
            <img src='/img/scanner.svg' alt='' className='w-64 mx-auto' />
          </div>

          <div className='col-span-2 md:col-span-1'>
            <div className='text-2xl font-bold'>CoronaCheck Scanner</div>

            <div className='mt-4'>
              Wil je weten hoe je CoronaCheck kunt gebruiken om bezoekers toe te
              laten?
            </div>

            <div className='mt-6'>
              <button className='rounded-full bg-blue-800 border-2 border-blue-800 text-white hover:bg-white hover:text-blue-800 font-bold px-12 py-4'>
                Bekijk de Scanner-app
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Wide Card 3 */}
      <div className='mt-14 max-w-full lg:max-w-6xl mx-auto'>
        <div className='bg-green-50 p-8'>
          <div className='text-2xl font-bold text-center'>
            Zo gaan we om met jouw gegevens:
          </div>

          <div className='grid grid-cols-2 mt-14'>
            <div className='col-span-2 md:col-span-1'>
              <img src='/img/info-2.svg' alt='' className='mx-auto' />

              <div className='text-center'>
                Jouw gegevens worden nergens <br /> centraal opgeslagen
              </div>
            </div>

            <div className='col-span-2 md:col-span-1'>
              <img src='/img/info-3.svg' alt='' className='mx-auto' />

              <div className='text-center'>
                Je locatiegegevens worden niet <br /> gebruikt of bewaard
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Cards */}
      <div className='text-3xl font-bold text-center mt-14'>
        Meestgestelde vragen
      </div>

      <div className='mt-14 max-w-full lg:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 p-8'>
        {gridCard.map((h) => (
          <div className='rounded-xl shadow-lg p-10'>
            <div className='text-xl font-bold'>{h}</div>
            <div className='text-blue-500 underline mt-14'>Lees meer</div>
          </div>
        ))}
      </div>

      <div className='text-center mt-4'>
        <button className='rounded-full bg-blue-800 border-2 border-blue-800 text-white hover:bg-white hover:text-blue-800 font-bold px-16 py-4'>
          Bekijk alle vragen &gt;
        </button>
      </div>

      {/* Wide Card 4 */}
      <div className='mt-14 max-w-full lg:max-w-6xl mx-auto'>
        <div className='bg-green-50 p-8 pb-0 grid grid-cols-2'>
          <div className='col-span-2 md:col-span-1 flex justify-center items-center'>
            <img src='/img/phone-icon.svg' alt='' />
          </div>

          <div className='col-span-2 md:col-span-1'>
            <div className='text-2xl font-bold'>
              Heb je vragen over CoronaCheck?
              <br />
              Lees dan de{' '}
              <span className='text-blue-500 underline'>
                meestgestelde vragen
              </span>
              .
            </div>

            <div className='mt-5'>
              Staat jouw vraag er niet tussen? Neem dan contact op met de
              helpdesk.
            </div>

            <div className='mt-5'>
              <div className='font-bold'>Bel de helpdesk</div>
              <span className='text-blue-500 underline'>0800-1421</span>{' '}
              (gratis). Of als je vanuit het buitenland belt:{' '}
              <span className='text-blue-500 underline'>+31 70 750 37 20</span>.
              <br />
              Bereikbaar van maandag t/m zondag 08.00 – 20.00 uur
            </div>

            <div className='mt-6 pb-6'></div>
          </div>
        </div>
      </div>

      <div className='my-20'>
        <img
          src='/img/logo-alleen-samen.svg'
          alt=''
          className='mx-auto w-80 hover:w-96 transition-all'
        />
      </div>

      {/* Footer */}
      <div className='bg-blue-600'>
        <div className='mt-14 max-w-full lg:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='p-4 pt-8 text-white'>
            CoronaCheck en CoronaCheck Scanner zijn ontwikkeld door het
            ministerie van Volksgezondheid, Welzijn en Sport. Zowel de apps als
            de papieren versie via CoronaCheck.nl waren niet tot stand gekomen
            zonder de hulp van tientallen experts en ervaringsdeskundigen. Ook
            heeft een grote open source community tijdens de ontwikkeling
            meegekeken en getest.
          </div>

          <div className='p-4 pt-8'>
            <div className='text-white font-bold'>Over CoronaCheck</div>

            {footerOverLinks.map((l) => (
              <div className='text-white  p-1'>
                <span className='mr-2'>&gt;</span>
                <span className='cursor-pointer hover:underline'>{l}</span>
              </div>
            ))}
          </div>

          <div className='p-4 pt-8'>
            <div className='text-white font-bold'>Meer informatie?</div>

            {footerMeerLinks.map((l) => (
              <div className='text-white  p-1'>
                <span className='mr-2'>&gt;</span>
                <span className='cursor-pointer hover:underline'>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
