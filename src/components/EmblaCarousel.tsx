import React, { useCallback, useEffect, useState } from "react";
import "../css/embla.css";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = ({
    slides,
}: {
    slides: { src: string; text: string }[];
}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
        loop: true,
    });
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: "keepSnaps",
        dragFree: true,
    });

    const onPrevButtonClick = useCallback(() => {
        emblaMainApi?.scrollPrev();
    }, [emblaMainApi]);

    const onNextButtonClick = useCallback(() => {
        emblaMainApi?.scrollNext();
    }, [emblaMainApi]);

    const onThumbClick = useCallback(
        (index: number) => {
            if (!emblaMainApi || !emblaThumbsApi) return;
            emblaMainApi.scrollTo(index);
        },
        [emblaMainApi, emblaThumbsApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return;
        setSelectedIndex(emblaMainApi.selectedScrollSnap());
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaMainApi) return;
        onSelect();

        emblaMainApi.on("select", onSelect).on("reInit", onSelect);
    }, [emblaMainApi, onSelect]);

    return (
        <div className="embla">
            <div className="overflow-hidden" ref={emblaMainRef}>
                <div className="embla__container">
                    {slides.map((item, index) => (
                        <div className="embla__slide" key={index}>
                            <img className="w-100" src={item.src} alt="" />
                            {item.text && <div className="embla__caption">{item.text}</div>}
                        </div>
                    ))}
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">
                <div className="d-flex align-items-center gap-2">
                    <button
                        className="embla__button"
                        onClick={onPrevButtonClick}
                    >
                        <i className="fa-solid fa-arrow-left" />
                    </button>
                    <button
                        className="embla__button"
                        onClick={onNextButtonClick}
                    >
                        <i className="fa-solid fa-arrow-right" />
                    </button>
                </div>
                <div className="embla-thumbs">
                    <div
                        className="embla-thumbs__viewport"
                        ref={emblaThumbsRef}
                    >
                        <div className="embla-thumbs__container">
                            {slides.map((item, index) => (
                                <div
                                    className={
                                        "embla-thumbs__slide" +
                                        (index === selectedIndex
                                            ? " embla-thumbs__slide--selected"
                                            : "")
                                    }
                                >
                                    <button
                                        onClick={() => onThumbClick(index)}
                                        type="button"
                                        className="embla-thumbs__slide__button"
                                    >
                                        <img
                                            className="w-100"
                                            src={item.src}
                                            alt=""
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;
