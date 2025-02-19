import React, { useState, useEffect, useRef } from 'react';

const Content = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const fadeInStyle = (delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.95)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  const leafStyle = {
    backgroundImage: "url('/leaf.svg')",
    position: 'absolute',
    top: '0', // Initial position from top
    left: '50%', // Can be adjusted based on the relative position
    transform: 'translateX(-50%)',
    animation: 'fall-animation 5s infinite',
  };

  const fallAnimation = `
    @keyframes fall-animation {
      0% {
        transform: translateY(0) translateX(-50%);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) translateX(-50%);
        opacity: 0;
      }
    }
  `;

  return (
    <div className="service-area-2 space overflow-hidden" ref={sectionRef} style={fadeInStyle()}>
      <style>{fallAnimation}</style>
      <div
        className="leaf-shape-animation3 d-lg-block d-none"
        style={{ backgroundImage: "url('/service-shape2-1.svg')" }}
      ></div>
      <div
        className="service-shape1_2 shape-mockup jump-reverse d-lg-block d-none"
        data-top={0}
        data-left={0}
      >
        <img src="/service-shape1-2.png" alt="img" />
      </div>
      <div className="container container2">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-12">
            <div className="title-area text-center">
              <h2 className="sec-title wow fadeInUp" data-wow-delay=".1s">
                About Company
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-12">
            <div className="about-content-wrap">
              <div className="row gy-4 wow fadeInUp" data-wow-delay=".2s">
                <blockquote>
                 
                </blockquote>
              </div>
              <p className="wow fadeInUp" data-wow-delay=".3s">
                Indo Consultant hadir dalam rangka menjawab tantangan global terkait
                perkembangan era baru dunia bisnis dan industri yang meletakkan isu{" "}
                <i>Sustainability</i> sebagai isu sentral dimana meletakkan
                kepentingan teknologi, lingkungan, ekonomi dan sosial sebagai satu
                kesatuan utuh terintegrasi. Terspesialisasi disektor lingkungan,
                kami menyediakan solusi-solusi yang bertujuan untuk keberlanjutan
                bisnis anda dan untuk membangun perusahaan yang berkesinambungan dan
                memiliki komitmen tinggi terhadap kelestaria lingkungan dan
                kepedulian sosial.
              </p>
              <p className="wow fadeInUp" data-wow-delay=".3s">
              PT Konsultan Perdagangan Internasional Indonesia (PT KPII){" "}
                <i>Adalah</i> perseroan terbatas yang didirikan berdasarkan hukum dan peraturan perundang-undangan Negara Republik Indonesia, yang berkedudukan di Jalan Taman Kebon Sirih III No 11 A, RT 9/RW 10, Kampung Bali, Kecamatan Tanah Abang, DKI Jakarta. PT KPII atau dikenal dengan Indo Consultant, bergerak di layanan pemeriksaan dan fasilitator kinerja bisnis berkelanjutan baik secara teknik dan manajemen bagi perusahaan Anda.
              </p>
              <p className="wow fadeInUp" data-wow-delay=".3s">
                Indo Consultant mengklasifikasikan produk dan jasanya menjadi dua
                kategori yaitu :
              </p>
              <div className="row flex flex-row justify-between space-x-4">
                {/* Example of about boxes */}
                <div className="col-sm-6">
                  <div className="about-box-wrap wow fadeInLeft" data-wow-delay=".4s">
                    <div className="about-box-icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M6.3303 7.99883L10.966 10.7807C11.1575 10.8957 11.4232 10.8307 11.539 10.6371L15.0639 4.74701L17.4519 8.73645L16.0106 9.60142C15.6719 9.80464 15.7945 10.3406 16.1878 10.3759L22.023 10.903C22.111 10.911 22.1994 10.8908 22.2752 10.8453C22.3511 10.7998 22.4105 10.7313 22.445 10.6498L24.7324 5.24843C24.8865 4.88452 24.4722 4.52355 24.1333 4.72695L22.8109 5.52038L20.9882 2.33596C20.5663 1.59882 19.779 1.14233 18.9336 1.14233H11.2696C10.4379 1.14233 9.65776 1.58599 9.23226 2.3023L8.1889 4.05712C7.91494 4.51834 8.63216 4.94652 8.90665 4.48459L9.94983 2.72942C10.2255 2.26575 10.7305 1.97811 11.2696 1.97811H11.277L12.7447 1.98542C13.1916 2.04845 13.6256 2.34411 13.8823 2.77297L14.5771 3.93383L11.0372 9.8489L7.11654 7.49598L7.66588 6.57194C7.94001 6.11068 7.2228 5.6825 6.94831 6.14447L6.18607 7.42666C6.1296 7.52173 6.11306 7.63532 6.14009 7.74256C6.16711 7.8498 6.2355 7.94195 6.33026 7.99883H6.3303ZM14.3309 1.97446L18.9226 1.97847H18.931C19.4801 1.97847 19.9903 2.27395 20.2636 2.75157L22.2979 6.30587C22.3255 6.35411 22.3624 6.39634 22.4065 6.43011C22.4506 6.46387 22.501 6.48849 22.5547 6.50252C22.6085 6.51655 22.6644 6.5197 22.7194 6.5118C22.7743 6.5039 22.8272 6.48509 22.8748 6.45649L23.4632 6.10355L21.7949 10.0432L17.5385 9.65892L18.239 9.23858C18.4368 9.12001 18.5011 8.86335 18.3825 8.66522L14.5986 2.34362C14.5204 2.21296 14.4308 2.08942 14.3309 1.97446ZM28.9495 16.7277L26.0405 11.5237C25.9283 11.3228 25.6745 11.2506 25.4734 11.3627L24.4894 11.9103C24.0208 12.1709 24.4261 12.902 24.895 12.6407L25.5152 12.2954L28.2208 17.1356C28.4852 17.6089 28.48 18.1943 28.2069 18.6627L27.3726 20.0936C27.0308 20.5303 26.5717 20.6389 26.2198 20.6452H24.9203L21.5201 14.5191L22.8666 13.7695C23.3353 13.5089 22.9301 12.7779 22.4608 13.0391L20.7495 13.9915C20.5481 14.1037 20.4755 14.358 20.5874 14.5599L23.9651 20.6452H19.2749L19.2476 18.9561C19.2414 18.5608 18.7162 18.3989 18.4887 18.7222L15.1149 23.519C15.064 23.5914 15.0374 23.678 15.0389 23.7664C15.0404 23.8548 15.0699 23.9405 15.1231 24.0111L18.6508 28.6958C18.8882 29.0115 19.408 28.8327 19.4016 28.4374L19.3763 26.8935L23.0418 26.9052H23.0495C23.8992 26.905 24.6881 26.4467 25.1078 25.7095C26.3832 23.502 27.6445 21.2851 28.9279 19.084C29.3495 18.3611 29.3577 17.4581 28.9495 16.7277ZM23.0493 26.0694H23.0444L18.9534 26.0567C18.898 26.0567 18.843 26.0677 18.7918 26.089C18.7405 26.1103 18.694 26.1415 18.6548 26.1808C18.6158 26.2204 18.5851 26.2673 18.5645 26.3189C18.5438 26.3705 18.5337 26.4256 18.5346 26.4812L18.5457 27.1681L15.973 23.7515L18.4335 20.2527L18.4467 21.0701C18.4485 21.1797 18.4933 21.2843 18.5714 21.3612C18.6495 21.4381 18.7546 21.4812 18.8642 21.4811H26.2301C26.3557 21.4792 26.481 21.4684 26.6051 21.4488L24.3835 25.2933C24.1107 25.7723 23.5998 26.0694 23.0493 26.0694ZM13.3224 20.7904C13.2507 20.7187 13.131 20.6687 13.027 20.6687L6.16937 20.6868L8.34827 16.579L9.83205 17.3684C10.1806 17.5541 10.5762 17.1724 10.4035 16.8166L7.84156 11.5403C7.80293 11.4607 7.74003 11.3954 7.66193 11.3538C7.58383 11.3123 7.49457 11.2967 7.40702 11.3092L1.60649 12.1363C1.21551 12.192 1.12066 12.7335 1.46942 12.9189L2.83127 13.6436L1.04883 16.8511C0.63411 17.5972 0.652412 18.5133 1.09527 19.2398C2.3543 21.335 3.61164 23.4314 4.8724 25.5259C5.36554 26.3445 6.08347 26.9563 7.08938 26.9501L9.25524 26.9378C9.79099 26.9347 9.78823 26.1019 9.25074 26.1019L7.08488 26.1143C6.5416 26.119 6.03439 25.8298 5.75697 25.3638L5.00528 24.1016C4.82823 23.6854 4.85708 23.1606 5.09158 22.7188L5.72562 21.5237L12.6116 21.5055L12.6238 26.0829L11.8426 26.0873C11.307 26.0902 11.3098 26.9232 11.8473 26.9232L13.0447 26.9164C13.1552 26.9159 13.261 26.8714 13.3389 26.7928C13.4167 26.7142 13.4602 26.608 13.4598 26.4973L13.4457 21.0855C13.4455 21.0306 13.4346 20.9763 13.4134 20.9256C13.3922 20.875 13.3613 20.8291 13.3224 20.7904V20.7904ZM4.17678 22.7463L1.80937 18.8066C1.5217 18.3346 1.50981 17.7409 1.7786 17.2575L3.76785 13.6777C3.79483 13.6291 3.81188 13.5756 3.81798 13.5204C3.82408 13.4652 3.81913 13.4093 3.8034 13.356C3.78768 13.3027 3.76149 13.2531 3.72639 13.21C3.69128 13.167 3.64796 13.1314 3.59894 13.1053L2.9927 12.7829L7.22351 12.1797L9.09226 16.0283L8.37156 15.6447C8.27369 15.5927 8.1592 15.5818 8.05326 15.6142C8.0008 15.6302 7.95203 15.6564 7.90973 15.6913C7.86743 15.7263 7.83244 15.7692 7.80678 15.8177L4.35424 22.327C4.28286 22.4613 4.22347 22.6016 4.17678 22.7463V22.7463Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="about-box-content">
                      <h3 className="about-box-title">Konsultasi</h3>
                      <p className="about-box-text">
                        Konsultasi yaitu jasa konsultasi studi teknik dan manajemen yang
                        menghasilkan rekomendasi-rekomendasi bagi bisnis berkelanjutan.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="about-box-wrap wow fadeInLeft" data-wow-delay=".4s">
                    <div className="about-box-icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1804_91)">
                          <path
                            d="M28.8222 4.07344C28.4102 2.77879 27.8517 1.85176 27.828 1.81281C27.7364 1.66205 27.5479 1.5836 27.3771 1.62269C27.3329 1.6328 26.2783 1.8787 25.0617 2.48573C23.4194 3.30488 22.2721 4.39846 21.7436 5.64779C21.3036 6.68812 21.2405 7.96002 21.5526 9.36509C20.8878 8.62333 20.1398 7.97445 19.3246 7.42814C19.0757 6.93683 18.4174 5.72722 17.3884 4.46302C17.0494 4.04681 16.3975 4.56912 16.7399 4.98946C17.4333 5.84151 17.9552 6.67944 18.2816 7.25513L14.4755 6.51386L10.8594 1.58623C11.2105 1.59108 11.5628 1.62496 11.9134 1.69371C13.025 1.91107 14.123 2.4767 15.1774 3.37447C15.5906 3.72629 16.1271 3.08595 15.7194 2.73894C14.5546 1.74727 13.3281 1.11975 12.0739 0.874342C10.1595 0.500078 7.92663 0.991438 5.6161 2.2958C3.89404 3.26801 2.74243 4.33586 2.69434 4.38074C2.54027 4.52455 2.51576 4.78581 2.64474 4.9538C2.81365 5.29993 3.45358 6.5485 4.51878 7.8927C5.14672 8.68522 5.80899 9.36353 6.49403 9.92097C6.29837 10.0845 6.10911 10.2555 5.92669 10.4337C4.9476 11.3904 4.19794 12.519 3.70583 13.7527C3.27077 14.8429 3.03679 16.0156 3.02373 17.2244C3.00216 19.2009 3.57543 21.1073 4.68193 22.7376C5.76286 24.33 7.27395 25.5527 9.05172 26.2732C9.54931 26.4745 9.86391 25.7014 9.366 25.4996C8.72673 25.2403 8.12011 24.9069 7.55859 24.5064C7.62999 24.1109 7.79551 22.6875 6.84918 21.2141C6.71668 21.008 7.11275 20.1986 7.34917 19.715C7.59322 19.2168 7.84516 18.7017 7.96286 18.2166C8.08783 17.7013 7.94717 17.2687 7.55632 16.9652C7.26944 16.7424 6.89392 16.6271 6.56297 16.5253C6.34798 16.4593 6.10424 16.3845 6.0172 16.312C5.83791 16.1619 5.54506 15.6073 5.3097 15.1619C5.04854 14.6677 4.79999 14.1975 4.54614 13.9079C5.11735 12.5527 6.03481 11.3536 7.18379 10.4361C8.23334 11.1504 9.4313 11.6433 10.7046 11.7431C9.22794 12.8861 8.75022 14.3458 9.43303 15.748C10.2303 17.3852 11.8715 17.1237 13.3194 16.8932C13.5699 16.8532 13.8291 16.812 14.0773 16.781C14.1705 16.7694 14.1986 16.7948 14.2173 16.8113C14.5343 17.0931 14.5249 18.4387 14.5182 19.4213C14.5089 20.7805 14.5002 22.0644 15.007 22.7235C15.2655 23.0596 15.6296 23.2314 16.0563 23.2314C16.312 23.2314 16.5898 23.1698 16.8813 23.0449C18.1415 22.5058 19.4515 20.8831 19.2517 19.5992C19.077 18.4768 18.9614 17.7352 19.2339 17.1374C19.4858 16.5842 20.0948 16.072 21.2941 15.4184C21.4404 16.0775 21.5103 16.7512 21.5026 17.4263C21.4771 19.7801 20.5352 21.9832 18.8509 23.6293C16.9685 25.469 14.3228 26.3776 11.7058 26.0894C11.1725 26.0316 11.0804 26.8605 11.6144 26.9193C14.479 27.2345 17.3753 26.2396 19.4351 24.2262C21.2793 22.4239 22.3102 20.0123 22.3382 17.4351C22.3755 14.0181 20.6205 10.9909 17.949 9.24702C18.501 8.85378 18.9122 8.51376 19.1402 8.31639C20.1143 9.01451 20.9783 9.87453 21.6971 10.8765C23.4227 13.2823 24.107 16.2151 23.6244 19.1352C22.6278 25.1631 16.9085 29.2577 10.8737 28.2616C7.95052 27.7794 5.3905 26.1891 3.66496 23.7832C1.9392 21.3776 1.25487 18.4444 1.73762 15.5245C1.8243 14.9991 1.00035 14.8612 0.913313 15.3885C0.393975 18.5286 1.13022 21.6826 2.9855 24.2697C4.84108 26.8564 7.59434 28.5667 10.7375 29.0855C11.3883 29.193 12.0468 29.2472 12.7065 29.2474C15.1768 29.2474 17.5799 28.4812 19.6277 27.0152C22.2177 25.1614 23.9298 22.4113 24.4488 19.2712C24.8292 16.9702 24.5348 14.6618 23.6205 12.5744C24.0425 12.4501 24.7606 12.2087 25.5471 11.8163C27.1892 10.9972 28.3365 9.9036 28.8649 8.65428C29.3938 7.40468 29.379 5.82063 28.8222 4.07344ZM4.57056 15.5514C4.88151 16.1403 5.17551 16.6969 5.48106 16.9521C5.69744 17.1329 5.99862 17.2254 6.31736 17.3233C7.13405 17.5741 7.22889 17.6972 7.15058 18.0199C7.05445 18.4166 6.82257 18.8903 6.59853 19.3483C6.16695 20.2304 5.75943 21.0631 6.14573 21.6649C6.57093 22.3245 6.79094 23.0952 6.77801 23.8797C4.28926 21.6377 3.27585 18.0966 4.20293 14.878C4.3258 15.0884 4.45491 15.333 4.57056 15.5514ZM24.7866 7.34814L23.5992 4.47326C24.177 3.93337 24.8474 3.52714 25.4184 3.24103C25.9048 2.99717 26.3676 2.81494 26.7387 2.68569L24.7866 7.34814ZM27.5091 3.00933C27.675 3.36552 27.8674 3.82486 28.0317 4.34401C28.2119 4.91377 28.3773 5.61987 28.4102 6.35647L25.6274 7.50339L27.5091 3.00933ZM22.5132 5.97281C22.6365 5.68162 22.7958 5.41172 22.9798 5.16248L24.3316 8.43482L23.1185 11.3327C22.9481 10.9715 22.7474 10.497 22.5771 9.95801C22.2354 8.87885 21.9471 7.31109 22.5132 5.97281ZM25.1902 11.061C24.7221 11.2958 24.2754 11.4735 23.9115 11.6017L25.1704 8.59515L28.3746 7.27423C28.3281 7.63286 28.2396 7.98838 28.0952 8.32925C27.5292 9.66754 26.2031 10.5536 25.1902 11.061ZM10.1233 10.8234C9.9763 10.7945 9.83052 10.7597 9.68631 10.7191L14.3108 7.33251L18.1187 8.07391C16.7315 9.1658 13.3558 11.4561 10.1233 10.8234ZM5.89692 8.21167C4.90789 7.14676 4.18301 6.00811 3.76675 5.27904L8.61251 6.22294L5.89692 8.21167ZM6.75274 2.64223L8.78017 5.40496L3.90304 4.45518C4.51708 3.97081 5.53062 3.2437 6.75274 2.64223ZM9.98905 5.64044L7.5311 2.29094C8.26694 1.98885 9.0568 1.7511 9.86649 1.64535L13.2668 6.27855L9.98905 5.64044ZM9.72896 6.4403L13.1946 7.1151L8.74679 10.3721C7.908 9.98513 7.15312 9.42876 6.49264 8.81029L9.72896 6.4403ZM21.067 14.5919C19.5607 15.3937 18.8231 16.0234 18.4731 16.7916C18.0973 17.6166 18.235 18.502 18.4256 19.7274C18.5382 20.45 17.6786 21.7957 16.5522 22.2776C16.1354 22.4559 15.8386 22.4348 15.6696 22.2148C15.3376 21.7832 15.3467 20.4766 15.3538 19.4271C15.3637 17.9748 15.3724 16.7207 14.7727 16.1876C14.557 15.996 14.2811 15.9149 13.9745 15.9525C13.7118 15.9852 13.4453 16.0276 13.1878 16.0687C11.6518 16.3132 10.6852 16.4111 10.1846 15.3827C9.37331 13.7171 11.0155 12.4833 11.7592 12.0303C11.9106 11.9381 12.0511 11.8294 12.1817 11.7084C13.9792 11.4937 15.6776 10.7232 17.1911 9.75819C19.0058 10.8414 20.3989 12.5555 21.067 14.5919Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1804_91">
                            <rect
                              width={30}
                              height={30}
                              fill="white"
                              transform="translate(0.000976562)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="about-box-content">
                      <h3 className="about-box-title">Jasa</h3>
                      <p className="about-box-text">
                        Jasa yaitu jasa fasilitator dan implementasi dalam menjalankan bisnis berkelanjutan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
