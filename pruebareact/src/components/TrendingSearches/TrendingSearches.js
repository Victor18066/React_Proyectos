import Category from 'components/Category/category'
import { useState, useEffect, useRef } from 'react'
import getTrendingTerms from 'services/getTrending'

export default function TrendingSearches () {
    const [trends, setTrends] = useState([])

    useEffect(function() {
        getTrendingTerms().then(setTrends)

    }, [])

    return <Category name='Tendencias' options={trends} />
}