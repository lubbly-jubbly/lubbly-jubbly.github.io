'use client'
import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { scrollToX } from '../../utils/scroll'

export const ScrollGallery: FC<
  PropsWithChildren<{ itemWidth: number; gapWidth: number }>
> = ({ itemWidth, gapWidth, children }) => {
  const scrollContainerRef = useRef<HTMLElement>(null)
  const [scrollNavigation, setScrollNavigation] = useState({
    prev: false,
    next: true,
  })
  const [isScrolling, setIsScrolling] = useState(false)

  const handleClickPrevious = useCallback(() => {
    if (isScrolling) return
    const scrollContainer = scrollContainerRef.current as HTMLDivElement
    scrollContainer.classList.remove('snap-x')
    setIsScrolling(true)
    scrollToX(
      200,
      Math.max(scrollContainer?.scrollLeft - itemWidth - gapWidth, 0),
      scrollContainer,
      () => {
        setIsScrolling(false)
        scrollContainer.classList.add('snap-x')
      }
    )
  }, [gapWidth, isScrolling, itemWidth])

  const handleClickNext = useCallback(() => {
    if (isScrolling) return
    const scrollContainer = scrollContainerRef.current as HTMLDivElement
    scrollContainer.classList.remove('snap-x')
    setIsScrolling(true)
    scrollToX(
      200,
      scrollContainer.scrollLeft + itemWidth + gapWidth,
      scrollContainer,
      () => {
        setIsScrolling(false)
        scrollContainer.classList.add('snap-x')
      }
    )
  }, [gapWidth, isScrolling, itemWidth])

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current as HTMLDivElement
    const updateScrollNavigation = () => {
      setScrollNavigation(() => ({
        prev: scrollContainer?.scrollLeft > 0,
        next:
          scrollContainer.children[
            scrollContainer.children.length - 1
          ]?.getBoundingClientRect().right > window.innerWidth,
      }))
    }

    scrollContainer?.addEventListener('scroll', updateScrollNavigation)
    return () => {
      scrollContainer?.removeEventListener('scroll', updateScrollNavigation)
    }
  }, [])

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current as HTMLDivElement
    scrollContainer.classList.remove('snap-x')
    setIsScrolling(true)
    scrollToX(200, 0, scrollContainer, () => {
      setIsScrolling(false)
      scrollContainer.classList.add('snap-x')
    })
  }, [gapWidth, itemWidth])

  return (
    <>
      <div className="relative">
        <main
          className="sm:scrollbar-none group relative flex snap-x snap-mandatory scroll-pl-[max(var(--slider-padding),calc((100%-72rem)/2+var(--slider-padding)))] gap-8 overflow-x-auto py-12 px-[max(var(--slider-padding),calc((100%-72rem)/2+var(--slider-padding)))] [--slider-padding:2rem]"
          ref={scrollContainerRef}
        >
          {children}
        </main>
        <button
          className="absolute left-10 bottom-0 hidden items-center gap-2 py-2 px-4 md:flex opacity-80 hover:opacity-100 disabled:opacity-30 disabled:hover:opacity-30"
          onClick={handleClickPrevious}
          disabled={!scrollNavigation.prev}
        >
          <img src="/images/back-arrow.png" alt="back arrow" width={40} />
        </button>
        <button
          className="absolute right-10 bottom-0 hidden items-center gap-2 py-2 px-4 md:flex -scale-x-100 opacity-80 hover:opacity-100 disabled:opacity-30 disabled:hover:opacity-30"
          onClick={handleClickNext}
          disabled={!scrollNavigation.next}
        >
          <img src="/images/back-arrow.png" alt="back arrow" width={40} />
        </button>
      </div>
    </>
  )
}
