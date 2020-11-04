<template>
  <div>
    <PageLoader />
    <div class="info-container">
      <div class="info-content">
        <p class="content">
          Harry Lawson (b. South Shields, 1994) is an artist and documentary
          filmmaker based in London. His work is split between archival
          research, experimental documentary and image-making. He sporadically
          programmes and hosts documentary film screenings, exhibiting
          experimental non-fiction work in London and elsewhere.
          <br /><br />
          Harry holds a BA in English Literature from KCL and an MA in
          Ethnographic and Documentary Film from UCL. He has worked with various
          organisations and brands, including Block9, Institute for Ageing, The
          FA, Umbro, Puma and Mundial. His films have been featured in places
          like The Observer, Crack, Resident Advisor, Mixmag, Hypebeast, and
          Attack Magazine. In 2020, he was invited by Wellcome Trust to take
          part in an exhibition called Testing Situations.
        </p>
        <!-- Press -->
        <div class="press">
          <div class="nav-button title">Press</div>
          <a
            href="https://www.residentadvisor.net/news/72903"
            target="_blank"
            rel="noopener"
            class="press-row"
          >
            <p class="press-item">
              RA News: Watch Meat Rack, a short film tribute to Glastonbury's
              NYC Downlow — via Resident Advisor
            </p>
            <p class="press-item">
              RA News: Watch Meat Rack, a short film tribute to Glastonbury's
              NYC Downlow — via Resident Advisor
            </p>
            <p class="press-item">
              RA News: Watch Meat Rack, a short film tribute to Glastonbury's
              NYC Downlow — via Resident Advisor
            </p>
            <!-- <div class="circle-button lift">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8986865 14.91348017l-1.99999998 7e-8-.00019898-11.4199735L1.80418111 20.58781319.38996754 19.17359962 17.47791002 2.08565715l-11.40689556.00015104V.08580813l12.82818019.00015104-.00050813-.00090609.57962858.00019898.00353554-.00353553.00353553.00353553 1.41330033-.0001989.00075505.00075504v1.99999991l-.00075505 12.82767206z"
                  fill="#000000"
                  fill-rule="nonzero"
                />
              </svg>
            </div> -->
          </a>
        </div>
        <!-- Contact -->
        <div class="contact">
          <div class="nav-button title">Contact</div>
          <div class="contact-container">
            <a href="mailto:harry@harry.ooo" rel="noopener" class="contact-row">
              <div class="contact-item">
                <!-- Mail Icon -->
                <div class="circle-button mail">
                  <svg
                    width="29"
                    height="21"
                    viewBox="0 0 29 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      transform="translate(2 2)"
                      fill-rule="nonzero"
                      stroke="#000000"
                      stroke-width="2"
                      fill="none"
                    >
                      <rect x="-1" y="-1" width="27" height="19" rx="2" />
                      <path
                        d="M0 0l11.2136158 9.41943729c.7437941.62478701 1.8289743.62478701 2.5727684 0L25 0h0"
                      />
                    </g>
                  </svg>
                </div>
                <span>harry@harry.ooo</span>
              </div>
            </a>
            <a
              href="https://www.instagram.com/harrylaws.on/"
              target="_blank"
              rel="noopener"
              class="contact-row"
            >
              <!-- Instagram icon -->
              <div class="contact-item">
                <div class="circle-button instagram">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#000000" fill-rule="nonzero">
                      <path
                        d="M14 2c3.9081114 0 4.3716202.01463712 5.9146168.08538321 1.6661923.07562513 3.2116284.4098394 4.4008945 1.59910551 1.1892661 1.18926611 1.5234804 2.73470217 1.5991055 4.40089449C25.9853629 9.62837975 26 10.0918886 26 14s-.0146371 4.3716202-.0853832 5.9146168c-.0756251 1.6661923-.4098394 3.2116284-1.5991055 4.4008945-1.1892661 1.1892661-2.7347022 1.5234804-4.4008945 1.5991055C18.3716202 25.9853629 17.9081114 26 14 26s-4.37162025-.0146371-5.91461679-.0853832c-1.66619232-.0756251-3.21162838-.4098394-4.40089449-1.5991055-1.18926611-1.1892661-1.52348038-2.7347022-1.59910551-4.4008945C2.01463712 18.3716202 2 17.9081114 2 14s.01463712-4.37162025.08538321-5.91461679c.07562513-1.66619232.4098394-3.21162838 1.59910551-4.40089449 1.18926611-1.18926611 2.73470217-1.52348038 4.40089449-1.59910551C9.62837975 2.01463712 10.0918886 2 14 2m0-2c-3.8021667 0-4.27933333.01633333-5.77266667.084-2.275.10383333-4.2735.6615-5.87766666 2.26566667C.7455 3.95383333.18783333 5.95233333.084 8.22733333.01633333 9.72066667 0 10.1978333 0 14c0 3.8021667.01633333 4.2793333.084 5.7726667.10383333 2.275.6615 4.2735 2.26566667 5.8776666C3.95383333 27.2545 5.95233333 27.8121667 8.22733333 27.916 9.72066667 27.9836667 10.1978333 28 14 28c3.8021667 0 4.2793333-.0163333 5.7726667-.084 2.275-.1038333 4.2735-.6615 5.8776666-2.2656667C27.2545 24.0461667 27.8121667 22.0476667 27.916 19.7726667 27.9836667 18.2793333 28 17.8021667 28 14c0-3.8021667-.0163333-4.27933333-.084-5.77266667-.1038333-2.275-.6615-4.2735-2.2656667-5.87766666C24.0461667.7455 22.0476667.18783333 19.7726667.084 18.2793333.01633333 17.8021667 0 14 0z"
                      />
                      <path
                        d="M14 7c-3.8657903 0-7 3.1342097-7 7s3.1342097 7 7 7 7-3.1342097 7-7-3.1342097-7-7-7zm0 12c-2.76125 0-5-2.23875-5-5s2.23875-5 5-5 5 2.23875 5 5-2.23875 5-5 5z"
                      />
                      <circle cx="21.5" cy="6.5" r="1.5" />
                    </g>
                  </svg>
                </div>
                <span>harrylaws.on</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.info-container {
  width: 100%;
  padding-left: calc(50% - 20.625rem);
  padding-right: calc(50% - 20.625rem);
  margin: 0 auto;
}
.info-container .content {
  font-size: 26px;
  letter-spacing: -0.24px;
  line-height: 40px;
  margin-bottom: 6rem;
}
.info-container .press-row {
  font-size: 26px;
  letter-spacing: -0.24px;
  line-height: 40px;
  text-decoration: none;
}
.info-container .press-item {
  margin-bottom: 2rem;
}
.info-container .press-item:first-child {
  margin-top: 3rem;
}
.info-container .press-item:last-child {
  margin-bottom: 6rem;
}
.info-container .info-content {
  padding-top: calc(11.25rem + 6rem);
  padding-bottom: 11.25rem;
}
.info-container .contact-container {
  margin-top: 3rem;
}
.info-container .contact-row {
  font-size: 26px;
  letter-spacing: -0.24px;
  text-decoration: none;
  display: block;
}
.info-container .contact-row:first-child {
  margin-bottom: 1rem;
}
.info-container .contact-item {
  display: flex;
  align-items: center;
}
.info-container .contact-item span {
  margin-left: 1rem;
}

.contact-row:hover .circle-button.instagram {
  background: #d6249f;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  border: none;
}
.contact-row:hover .circle-button.instagram svg circle {
  fill: white;
}
.contact-row:hover .circle-button.instagram svg path {
  fill: white;
}

.contact-row:hover .circle-button.mail {
  background-color: black;
}
.contact-row:hover .circle-button.mail svg g {
  stroke: white;
  fill: black;
}
.contact-row:hover .circle-button.mail svg path {
  fill: black;
}
</style>
